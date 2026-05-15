import { Badge } from '@/types';
import { badgeDefinitions } from '@/data/badges';

interface BadgeDisplayProps {
  badges: Badge[];
  showAll?: boolean;
}

export default function BadgeDisplay({ badges, showAll = false }: BadgeDisplayProps) {
  const earnedTypes = new Set(badges.map(b => b.type));

  const displayBadges = showAll ? badgeDefinitions : badgeDefinitions.filter(bd => earnedTypes.has(bd.id));

  if (displayBadges.length === 0) {
    return <p className="text-sm text-gray-500">まだバッジはありません。学習を続けてゲットしよう！</p>;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {displayBadges.map(bd => {
        const earned = earnedTypes.has(bd.id);
        return (
          <div
            key={bd.id}
            className={`flex flex-col items-center w-20 ${earned ? '' : 'opacity-30 grayscale'}`}
            title={bd.description}
          >
            <span className="text-3xl">{bd.icon}</span>
            <span className="text-xs text-center font-medium text-gray-700 mt-1 leading-tight">{bd.title}</span>
            {earned && <span className="text-xs text-green-600">獲得済み</span>}
          </div>
        );
      })}
    </div>
  );
}
