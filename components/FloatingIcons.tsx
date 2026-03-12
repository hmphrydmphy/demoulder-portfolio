"use client";

import {
  SiJira,
  SiNotion,
  SiAsana,
  SiTrello,
  SiSlack,
  SiFigma,
  SiShopify,
  SiGithub,
} from "react-icons/si";
import { CSSProperties } from "react";

type FloatVariant = "float-a" | "float-b" | "float-c";

const ICONS: {
  Icon: React.ComponentType<{ size?: number; color?: string }>;
  color: string;
  size: number;
  top: string;
  left?: string;
  right?: string;
  variant: FloatVariant;
  dur: string;
  delay: string;
}[] = [
  { Icon: SiJira,     color: "#2684FF", size: 38, top: "14%", right: "38%", variant: "float-a", dur: "9s",  delay: "0s"    },
  { Icon: SiNotion,   color: "#e8e0cc", size: 30, top: "62%", left:  "5%",  variant: "float-b", dur: "12s", delay: "-4s"   },
  { Icon: SiAsana,    color: "#F06A6A", size: 32, top: "78%", right: "22%", variant: "float-a", dur: "10s", delay: "-2s"   },
  { Icon: SiTrello,   color: "#0079BF", size: 28, top: "30%", left:  "3%",  variant: "float-c", dur: "8s",  delay: "-1s"   },
  { Icon: SiSlack,    color: "#e8b96e", size: 34, top: "50%", right: "5%",  variant: "float-b", dur: "11s", delay: "-5s"   },
  { Icon: SiFigma,    color: "#F24E1E", size: 30, top: "20%", right: "12%", variant: "float-c", dur: "13s", delay: "-3s"   },
  { Icon: SiShopify,  color: "#96BF48", size: 28, top: "85%", left:  "18%", variant: "float-a", dur: "9.5s",delay: "-6s"   },
  { Icon: SiGithub,   color: "#e8e0cc", size: 32, top: "42%", right: "30%", variant: "float-b", dur: "10s", delay: "-7s"   },
];

export default function FloatingIcons() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {ICONS.map(({ Icon, color, size, top, left, right, variant, dur, delay }, i) => {
        const posStyle: CSSProperties = {
          position: "absolute",
          top,
          ...(left  ? { left }  : {}),
          ...(right ? { right } : {}),
          "--dur": dur,
          animationDelay: delay,
          opacity: 0.14,
          filter: "blur(0.4px)",
        } as CSSProperties;

        return (
          <div key={i} className={variant} style={posStyle}>
            <Icon size={size} color={color} />
          </div>
        );
      })}
    </div>
  );
}
