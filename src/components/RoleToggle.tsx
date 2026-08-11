import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useRole } from "../context/RoleContext";
import type { ActiveRole } from "../context/RoleContext";

interface RoleOption {
  id: ActiveRole;
  label: string;
  ariaLabel: string;
}

const roles: RoleOption[] = [
  { id: "uiux", label: "UI/UX Designer", ariaLabel: "Switch to UI/UX Designer" },
  { id: "video", label: "Video Editor", ariaLabel: "Switch to Video Editor" },
];

export default function RoleToggle() {
  const { activeRole, setActiveRole } = useRole();

  const handleKeyDown = (e: React.KeyboardEvent, id: ActiveRole) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveRole(id);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveRole("uiux");
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActiveRole("video");
    }
  };

  return (
    <Box
      role="group"
      aria-label="Switch professional role"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: "#F3F4F6",
        borderRadius: "100px",
        padding: "4px",
        border: "1px solid #E5E7E8",
        boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
        position: "relative",
      }}
    >
      {roles.map((role) => {
        const isActive = activeRole === role.id;
        return (
          <Box
            key={role.id}
            component="button"
            onClick={() => setActiveRole(role.id)}
            onKeyDown={(e: React.KeyboardEvent) => handleKeyDown(e, role.id)}
            role="radio"
            aria-checked={isActive}
            aria-label={role.ariaLabel}
            tabIndex={isActive ? 0 : -1}
            sx={{
              position: "relative",
              px: { xs: 2, sm: 2.5 },
              py: 1,
              border: "none",
              borderRadius: "100px",
              cursor: "pointer",
              background: "transparent",
              zIndex: 1,
              transition: "color 0.35s ease",
              outline: "none",
              "&:focus-visible": {
                outline: "2px solid #0C8EFF",
                outlineOffset: 2,
              },
            }}
          >
            {isActive && (
              <motion.div
                layoutId="role-toggle-active"
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 100,
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                  zIndex: -1,
                }}
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <Typography
              variant="body2"
              sx={{
                fontFamily: "var(--OpenSansMed)",
                fontSize: { xs: "13px", sm: "14px" },
                lineHeight: "20px",
                color: isActive ? "#17181A" : "#6B7280",
                transition: "color 0.3s ease",
                whiteSpace: "nowrap",
                userSelect: "none",
              }}
            >
              {role.label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
