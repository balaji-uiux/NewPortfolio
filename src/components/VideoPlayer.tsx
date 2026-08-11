import { useRef, useState, useEffect, useCallback } from "react";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
  Slider,
  CircularProgress,
} from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import Replay10RoundedIcon from "@mui/icons-material/Replay10Rounded";
import Forward10RoundedIcon from "@mui/icons-material/Forward10Rounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRoundedIcon from "@mui/icons-material/VolumeDownRounded";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import FullscreenExitRoundedIcon from "@mui/icons-material/FullscreenExitRounded";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import { motion, AnimatePresence } from "motion/react";
import { videoProjects } from "../data/videoProjects";

// Helper function to format seconds into mm:ss
function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

export default function VideoPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const playlistRefs = useRef<(HTMLDivElement | null)[]>([]);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const current = videoProjects[currentIndex];
  const total = videoProjects.length;

  // Handle switching video project
  const switchTo = useCallback(
    (index: number, autoPlay: boolean = true) => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setIsPlaying(false);
      setIsEnded(false);
      setCurrentTime(0);
      setCurrentIndex(index);

      // Auto-scroll selected playlist item into view
      setTimeout(() => {
        playlistRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
        if (autoPlay && videoRef.current) {
          videoRef.current
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        }
      }, 100);
    },
    []
  );

  // Play / Pause toggle
  const handlePlayPause = useCallback(() => {
    if (!videoRef.current) return;
    if (isEnded) {
      videoRef.current.currentTime = 0;
      setIsEnded(false);
      videoRef.current.play();
      setIsPlaying(true);
      return;
    }
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [isEnded, isPlaying]);

  // Seek -10s / +10s
  const handleSeekBy = useCallback((offset: number) => {
    if (!videoRef.current) return;
    const newTime = Math.min(
      Math.max(0, videoRef.current.currentTime + offset),
      videoRef.current.duration || 0
    );
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  }, []);

  // Timeline slider seek
  const handleTimelineChange = (_: Event, newValue: number | number[]) => {
    const time = newValue as number;
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  // Volume change
  const handleVolumeChange = (_: Event, newValue: number | number[]) => {
    const val = newValue as number;
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      if (val === 0) {
        videoRef.current.muted = true;
        setIsMuted(true);
      } else if (isMuted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  // Mute / Unmute toggle
  const handleToggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  // Fullscreen toggle
  const handleToggleFullscreen = () => {
    if (!playerContainerRef.current) return;
    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen?.().then(() => {
        setIsFullscreen(true);
      });
    } else {
      document.exitFullscreen?.().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  // Fullscreen change listener
  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  // Auto-hide controls when playing after 3 seconds of inactivity
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  // Keyboard navigation for video player
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "k") {
      e.preventDefault();
      handlePlayPause();
    } else if (e.key === "ArrowLeft" || e.key === "j") {
      e.preventDefault();
      handleSeekBy(-10);
    } else if (e.key === "ArrowRight" || e.key === "l") {
      e.preventDefault();
      handleSeekBy(10);
    } else if (e.key === "f") {
      e.preventDefault();
      handleToggleFullscreen();
    } else if (e.key === "m") {
      e.preventDefault();
      handleToggleMute();
    }
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + total) % total;
    switchTo(newIndex, isPlaying);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % total;
    switchTo(newIndex, isPlaying);
  };

  return (
    <Box
      tabIndex={0}
      onKeyDown={handleKeyDown}
      sx={{ outline: "none" }}
      className="yt-player-wrapper"
    >
      <Grid container spacing={{ xs: 2.5, md: 3 }} alignItems="flex-start">
        {/* ── LEFT COLUMN: Main Video Player & Metadata (70% on desktop) ── */}
        <Grid size={{ xs: 12, md: 8, lg: 8.5 }}>
          <Box
            ref={playerContainerRef}
            className={`yt-player-container ${isFullscreen ? "fullscreen" : ""}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => isPlaying && setShowControls(false)}
          >
            {/* Video Screen */}
            <Box className="yt-video-screen">
              <video
                ref={videoRef}
                src={current.video}
                preload="metadata"
                playsInline
                onTimeUpdate={() => {
                  if (videoRef.current) {
                    setCurrentTime(videoRef.current.currentTime);
                  }
                }}
                onLoadedMetadata={() => {
                  if (videoRef.current) {
                    setDuration(videoRef.current.duration || 0);
                  }
                }}
                onWaiting={() => setIsLoading(true)}
                onPlaying={() => {
                  setIsLoading(false);
                  setIsPlaying(true);
                }}
                onPause={() => setIsPlaying(false)}
                onEnded={() => {
                  setIsPlaying(false);
                  setIsEnded(true);
                  setShowControls(true);
                }}
                onClick={handlePlayPause}
                aria-label={`Playing video: ${current.title}`}
              />

              {/* Loading Spinner */}
              {isLoading && (
                <Box className="yt-overlay-center">
                  <CircularProgress sx={{ color: "#0C8EFF" }} size={48} />
                </Box>
              )}

              {/* Central Play/Replay Overlay when paused or ended */}
              {!isPlaying && !isLoading && (
                <Box
                  className="yt-overlay-center clickable"
                  onClick={handlePlayPause}
                  aria-label={isEnded ? "Replay video" : "Play video"}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.94 }}
                    className="yt-play-circle"
                  >
                    {isEnded ? (
                      <ReplayRoundedIcon sx={{ fontSize: 40, color: "#17181A" }} />
                    ) : (
                      <PlayArrowRoundedIcon
                        sx={{ fontSize: 44, color: "#17181A", ml: "4px" }}
                      />
                    )}
                  </motion.div>
                </Box>
              )}

              {/* Series Tag Badge Overlay */}
              {current.series && (
                <Box className="yt-series-badge">
                  <Typography variant="caption">{current.series}</Typography>
                </Box>
              )}

              {/* ── Integrated YouTube-Style Controls Overlay Bar ── */}
              <AnimatePresence>
                {(showControls || !isPlaying) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="yt-controls-bar"
                  >
                    {/* Progress Bar / Timeline */}
                    <Box className="yt-timeline-container">
                      <Slider
                        value={currentTime}
                        max={duration || 100}
                        onChange={handleTimelineChange}
                        aria-label="Video timeline seek bar"
                        size="small"
                        sx={{
                          color: "#0C8EFF",
                          height: 4,
                          padding: "10px 0",
                          "& .MuiSlider-thumb": {
                            width: 14,
                            height: 14,
                            backgroundColor: "#FFFFFF",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
                            transition: "0.2s transform",
                            "&:hover, &.Mui-focusVisible": {
                              boxShadow: "0 0 0 6px rgba(12, 142, 255, 0.2)",
                            },
                          },
                          "& .MuiSlider-rail": {
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                            opacity: 1,
                          },
                          "& .MuiSlider-track": {
                            backgroundColor: "#0C8EFF",
                            border: "none",
                          },
                        }}
                      />
                    </Box>

                    {/* Controls Row */}
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      className="yt-controls-row"
                    >
                      {/* Left Controls Group */}
                      <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1 }}>
                        <IconButton
                          onClick={handlePlayPause}
                          className="yt-ctrl-btn primary"
                          aria-label={isPlaying ? "Pause" : "Play"}
                          title={isPlaying ? "Pause (k)" : "Play (k)"}
                        >
                          {isPlaying ? (
                            <PauseRoundedIcon />
                          ) : isEnded ? (
                            <ReplayRoundedIcon />
                          ) : (
                            <PlayArrowRoundedIcon />
                          )}
                        </IconButton>

                        <IconButton
                          onClick={() => handleSeekBy(-10)}
                          className="yt-ctrl-btn"
                          aria-label="Rewind 10 seconds"
                          title="Rewind 10s (j)"
                        >
                          <Replay10RoundedIcon />
                        </IconButton>

                        <IconButton
                          onClick={() => handleSeekBy(10)}
                          className="yt-ctrl-btn"
                          aria-label="Forward 10 seconds"
                          title="Forward 10s (l)"
                        >
                          <Forward10RoundedIcon />
                        </IconButton>

                        <IconButton
                          onClick={handlePrev}
                          className="yt-ctrl-btn"
                          aria-label="Previous video"
                          title="Previous video"
                        >
                          <SkipPreviousRoundedIcon />
                        </IconButton>

                        <IconButton
                          onClick={handleNext}
                          className="yt-ctrl-btn"
                          aria-label="Next video"
                          title="Next video"
                        >
                          <SkipNextRoundedIcon />
                        </IconButton>

                        {/* Volume Control Group */}
                        <Stack
                          direction="row"
                          alignItems="center"
                          className="yt-volume-group"
                        >
                          <IconButton
                            onClick={handleToggleMute}
                            className="yt-ctrl-btn"
                            aria-label={isMuted ? "Unmute" : "Mute"}
                            title={isMuted ? "Unmute (m)" : "Mute (m)"}
                          >
                            {isMuted || volume === 0 ? (
                              <VolumeOffRoundedIcon />
                            ) : volume < 0.5 ? (
                              <VolumeDownRoundedIcon />
                            ) : (
                              <VolumeUpRoundedIcon />
                            )}
                          </IconButton>
                          <Box className="yt-volume-slider-box">
                            <Slider
                              value={isMuted ? 0 : volume}
                              min={0}
                              max={1}
                              step={0.05}
                              onChange={handleVolumeChange}
                              aria-label="Volume slider"
                              size="small"
                              sx={{
                                color: "#FFFFFF",
                                height: 3,
                                width: 56,
                                "& .MuiSlider-thumb": {
                                  width: 10,
                                  height: 10,
                                },
                              }}
                            />
                          </Box>
                        </Stack>

                        {/* Time Display */}
                        <Typography className="yt-time-display">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </Typography>
                      </Stack>

                      {/* Right Controls Group */}
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <IconButton
                          onClick={handleToggleFullscreen}
                          className="yt-ctrl-btn"
                          aria-label={
                            isFullscreen ? "Exit Fullscreen" : "Fullscreen"
                          }
                          title={
                            isFullscreen
                              ? "Exit Fullscreen (f)"
                              : "Fullscreen (f)"
                          }
                        >
                          {isFullscreen ? (
                            <FullscreenExitRoundedIcon />
                          ) : (
                            <FullscreenRoundedIcon />
                          )}
                        </IconButton>
                      </Stack>
                    </Stack>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>

            {/* Video Info / Metadata Panel below screen */}
            <Box className="yt-metadata-panel">
              <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems={{ xs: "flex-start", sm: "center" }}
                justifyContent="space-between"
                gap={1}
                sx={{ mb: 1 }}
              >
                <Box>
                  <Typography className="yt-meta-title">{current.title}</Typography>
                  <Typography className="yt-meta-category">
                    {current.category}
                  </Typography>
                </Box>
                <Stack direction="row" gap={0.75} flexWrap="wrap">
                  {current.tools.map((tool) => (
                    <Box key={tool} className="yt-tool-badge">
                      {tool}
                    </Box>
                  ))}
                </Stack>
              </Stack>
              <Typography className="yt-meta-description">
                {current.description}
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* ── RIGHT COLUMN: Interactive Video Playlist (~30% on desktop) ── */}
        <Grid size={{ xs: 12, md: 4, lg: 3.5 }}>
          <Box className="yt-playlist-container">
            <Typography className="yt-playlist-header">
              Up Next & Playlist ({total})
            </Typography>

            <Box className="yt-playlist-scroll">
              {videoProjects.map((vp, index) => {
                const isActive = index === currentIndex;
                return (
                  <Box
                    key={index}
                    ref={(el: HTMLDivElement | null) => {
                      playlistRefs.current[index] = el;
                    }}
                    className={`yt-playlist-item ${isActive ? "active" : ""}`}
                    onClick={() => switchTo(index, true)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Select video ${index + 1}: ${vp.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        switchTo(index, true);
                      }
                    }}
                  >
                    {/* Playlist Item Thumbnail */}
                    <Box className="yt-thumb-box">
                      <video
                        src={vp.video}
                        preload="metadata"
                        muted
                        playsInline
                        aria-hidden="true"
                      />
                      <Box className="yt-thumb-overlay">
                        <PlayCircleFilledRoundedIcon className="yt-thumb-play-icon" />
                      </Box>
                      {vp.duration && (
                        <Typography className="yt-duration-badge">
                          {vp.duration}
                        </Typography>
                      )}
                    </Box>

                    {/* Playlist Item Meta */}
                    <Box className="yt-item-info">
                      {isActive && (
                        <Box className="yt-now-playing-badge">
                          <span className="dot pulse" />
                          NOW PLAYING
                        </Box>
                      )}
                      <Typography className="yt-item-title">
                        {vp.title}
                      </Typography>
                      <Typography className="yt-item-category">
                        {vp.category}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
