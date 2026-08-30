import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export function PythonIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path
        d="M63.5 8c-29.3 0-27.5 12.7-27.5 12.7l.03 13.1h28v3.9H23.5S8 35.8 8 65.2c0 29.4 13.5 28.3 13.5 28.3h8.1v-11.4s-.4-13.5 13.3-13.5h27.8s12.8.2 12.8-12.4V20.7S84.7 8 63.5 8zm-15.3 7.8c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7z"
        fill="#3776AB"
      />
      <path
        d="M64.5 120c29.3 0 27.5-12.7 27.5-12.7l-.03-13.1h-28v-3.9h40.5s15.5 1.9 15.5-27.5c0-29.4-13.5-28.3-13.5-28.3h-8.1v11.4s.4 13.5-13.3 13.5H57.3s-12.8-.2-12.8 12.4v34.5s-1.2 12.7 20 12.7zm15.3-7.8c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7z"
        fill="#FFD43B"
      />
    </svg>
  );
}

export function TableauIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="11" y="1" width="2" height="22" fill="#E97627" rx="1" />
      <rect x="1" y="11" width="22" height="2" fill="#E97627" rx="1" />
      <rect x="5.5" y="4" width="2" height="16" fill="#4E79A7" rx="1" />
      <rect x="16.5" y="4" width="2" height="16" fill="#4E79A7" rx="1" />
      <rect x="4" y="5.5" width="16" height="2" fill="#4E79A7" rx="1" />
      <rect x="4" y="16.5" width="16" height="2" fill="#4E79A7" rx="1" />
      <circle cx="12" cy="12" r="2.5" fill="#F28E2B" />
    </svg>
  );
}

export function PowerBiIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="11" width="4.5" height="11" rx="1.5" fill="#E0A500" />
      <rect x="7.5" y="7" width="4.5" height="15" rx="1.5" fill="#F2C811" />
      <rect x="13" y="3" width="4.5" height="19" rx="1.5" fill="#F9DE5A" />
      <rect x="18.5" y="9" width="3.5" height="13" rx="1.5" fill="#F2C811" />
    </svg>
  );
}

export function ExcelIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="20" height="18" rx="3" fill="#217346" />
      <path
        d="M8.5 7.5l2.5 4.5-2.5 4.5h2l1.5-3 1.5 3h2l-2.5-4.5 2.5-4.5h-2l-1.5 3-1.5-3h-2z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function SqlIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

export function AnalyticsIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2">
      <path d="M3 3v18h18" />
      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
    </svg>
  );
}

export function StatsIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2">
      <path d="M18 20V10" />
      <path d="M12 20V4" />
      <path d="M6 20v-6" />
    </svg>
  );
}

export function MachineLearningIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      <path d="M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
    </svg>
  );
}

export function InfraIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
      <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
    </svg>
  );
}

export function PostgresqlIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#336791">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z" />
    </svg>
  );
}

export function DockerIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#2496ED">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.93 0h2.12a.185.185 0 00.184-.186V6.29a.185.185 0 00-.184-.185h-2.12a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm8.79 2.714h2.12a.186.186 0 00.186-.186V9.006a.186.186 0 00-.186-.186h-2.12a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zM23.99 11.23a8.96 8.96 0 00-2.83-2.02c-.084-.04-.18-.024-.247.042-.716.716-1.637 1.137-2.637 1.205a.183.183 0 01-.197-.17c-.126-2.18-.98-3.41-2.483-3.6a.185.185 0 00-.203.15c-.443 2.14.394 3.738 1.49 4.88.082.085.05.228-.06.27-1.398.532-3.023.77-4.717.77-1.07 0-2.12-.095-3.116-.275-.125-.023-.236.064-.247.19-.115 1.348-.68 2.533-1.625 3.393-.105.096-.08.266.046.33 2.213 1.127 5.098 1.764 8.275 1.764 7.02 0 10.37-4.39 10.59-7.79.006-.09-.044-.175-.126-.208z" />
    </svg>
  );
}

export function GitIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#F05032">
      <path d="M21.7 11.3L12.7 2.3c-.4-.4-1-.4-1.4 0l-1.8 1.8 2.3 2.3c.4-.1.9 0 1.3.3.4.4.5 1 .3 1.5l2.2 2.2c.5-.2 1.1-.1 1.5.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.5-1-.3-1.5L12.4 9c-.2.1-.4.2-.7.2-.3 0-.5-.1-.7-.2L8.7 11.3v5.1c.4.2.7.6.7 1.1 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.5.3-.9.7-1.1V10.8c-.4-.2-.7-.6-.7-1.1 0-.6.4-1.1.9-1.3L4.1 6.2 2.3 8c-.4.4-.4 1 0 1.4l9 9c.4.4 1 .4 1.4 0l9-9c.4-.4.4-1 0-1.4z" />
    </svg>
  );
}

export function YoutubeBrandIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function LinkedinBrandIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function GithubBrandIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function WhatsappBrandIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export function GoogleScholarBrandIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
    </svg>
  );
}

export function ScholarBrandIcon(props: IconProps) {
  return <GoogleScholarBrandIcon {...props} />;
}

export function KaggleBrandIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.825 23.859c-.022.08-.095.141-.184.141h-3.139a.24.24 0 0 1-.19-.092L8.71 14.73l-1.927 1.838v7.051a.24.24 0 0 1-.24.24H3.84a.24.24 0 0 1-.24-.24V.24A.24.24 0 0 1 3.84 0h2.703a.24.24 0 0 1 .24.24v13.75l7.98-7.905a.24.24 0 0 1 .17-.085h3.35c.105 0 .185.074.195.166.01.092-.05.185-.13.266l-7.79 7.64 8.287 9.55c.07.08.08.197.02.297z" />
    </svg>
  );
}

export function TechIcon({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  const key = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (key.includes("python")) return <PythonIcon className={className} />;
  if (key.includes("tableau")) return <TableauIcon className={className} />;
  if (key.includes("power") || key.includes("bi")) return <PowerBiIcon className={className} />;
  if (key.includes("excel")) return <ExcelIcon className={className} />;
  if (key.includes("sql") && !key.includes("postg")) return <SqlIcon className={className} />;
  if (key.includes("postg")) return <PostgresqlIcon className={className} />;
  if (key.includes("docker")) return <DockerIcon className={className} />;
  if (key.includes("git")) return <GitIcon className={className} />;
  if (key.includes("analytic")) return <AnalyticsIcon className={className} />;
  if (key.includes("stat")) return <StatsIcon className={className} />;
  if (key.includes("machine") || key.includes("ml")) return <MachineLearningIcon className={className} />;
  if (key.includes("infra") || key.includes("system")) return <InfraIcon className={className} />;

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}
