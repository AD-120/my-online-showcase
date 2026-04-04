import { cn } from '@/lib/utils';

const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  // Technical / Development
  'Technical': { bg: 'bg-[#F0F464]', text: 'text-black' },
  'Development': { bg: 'bg-[#F0F464]', text: 'text-black' },
  'GovTech': { bg: 'bg-[#F0F464]', text: 'text-black' },
  'Hardware': { bg: 'bg-[#F0F464]', text: 'text-black' },
  // UX / UI Design
  'UX': { bg: 'bg-[#FF71D4]', text: 'text-black' },
  'UI': { bg: 'bg-[#FF71D4]', text: 'text-black' },
  'UX Design': { bg: 'bg-[#FF71D4]', text: 'text-black' },
  'UI Design': { bg: 'bg-[#FF71D4]', text: 'text-black' },
  'Web': { bg: 'bg-[#FF71D4]', text: 'text-black' },
  'Mobile': { bg: 'bg-[#FF71D4]', text: 'text-black' },
  // Learning Experience / LXD
  'LXD': { bg: 'bg-[#00F0FF]', text: 'text-black' },
  'Learning Experience': { bg: 'bg-[#00F0FF]', text: 'text-black' },
  'EdTech': { bg: 'bg-[#00F0FF]', text: 'text-black' },
  'Education': { bg: 'bg-[#00F0FF]', text: 'text-black' },
  'Visual Learning': { bg: 'bg-[#00F0FF]', text: 'text-black' },
  'Gamification': { bg: 'bg-[#00F0FF]', text: 'text-black' },
};

const DEFAULT_COLOR = { bg: 'bg-muted', text: 'text-muted-foreground' };

interface ProjectTagProps {
  tag: string;
  className?: string;
}

const ProjectTag = ({ tag, className }: ProjectTagProps) => {
  const colors = TAG_COLORS[tag] || DEFAULT_COLOR;

  return (
    <span
      className={cn(
        'rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider',
        colors.bg,
        colors.text,
        className
      )}
    >
      {tag}
    </span>
  );
};

export default ProjectTag;
