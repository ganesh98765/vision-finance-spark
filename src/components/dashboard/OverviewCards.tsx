import { TrendingUp, TrendingDown, DollarSign, Target, PiggyBank, AlertTriangle } from 'lucide-react';

const cards = [
  {
    title: 'Total Balance',
    value: '$12,847.32',
    change: '+8.2%',
    trend: 'up',
    icon: DollarSign,
    color: 'primary',
  },
  {
    title: 'Monthly Spending',
    value: '$3,247.18',
    change: '-12.4%',
    trend: 'down',
    icon: TrendingDown,
    color: 'success',
  },
  {
    title: 'Savings Goals',
    value: '7 Active',
    change: '+2 New',
    trend: 'up',
    icon: Target,
    color: 'secondary',
  },
  {
    title: 'Budget Status',
    value: '87% Used',
    change: 'On Track',
    trend: 'neutral',
    icon: PiggyBank,
    color: 'warning',
  },
];

export const OverviewCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        const isPositive = card.trend === 'up';
        const isNegative = card.trend === 'down';
        
        return (
          <div
            key={card.title}
            className={`glass-card p-6 hover-scale group animate-slide-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-${card.color}/10 rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all`}>
                <Icon className={`w-6 h-6 text-${card.color}`} />
              </div>
              {card.trend !== 'neutral' && (
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                  isPositive ? 'bg-success/10 text-success' : 
                  isNegative ? 'bg-destructive/10 text-destructive' : 
                  'bg-muted text-muted-foreground'
                }`}>
                  {isPositive && <TrendingUp className="w-3 h-3" />}
                  {isNegative && <TrendingDown className="w-3 h-3" />}
                  <span>{card.change}</span>
                </div>
              )}
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-foreground-muted mb-1">{card.title}</h3>
              <p className="text-2xl font-bold text-gradient-primary mb-2">{card.value}</p>
              {card.trend === 'neutral' && (
                <p className="text-sm text-warning font-medium">{card.change}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};