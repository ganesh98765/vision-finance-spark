import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { TrendingUp, Brain, Zap } from 'lucide-react';

const spendingData = [
  { month: 'Jan', actual: 2800, predicted: 2900, savings: 1200 },
  { month: 'Feb', actual: 3100, predicted: 3200, savings: 900 },
  { month: 'Mar', actual: 2900, predicted: 2950, savings: 1100 },
  { month: 'Apr', actual: 3300, predicted: 3250, savings: 800 },
  { month: 'May', actual: 3100, predicted: 3150, savings: 1000 },
  { month: 'Jun', actual: 3247, predicted: 3300, savings: 853 },
  { month: 'Jul', predicted: 3400, savings: 900 },
  { month: 'Aug', predicted: 3200, savings: 1100 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-4 border-glass">
        <p className="text-sm font-medium text-foreground">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.dataKey === 'actual' && 'Actual: '}
            {entry.dataKey === 'predicted' && 'Predicted: '}
            {entry.dataKey === 'savings' && 'Savings: '}
            ${entry.value?.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const PredictiveAnalytics = () => {
  return (
    <div className="glass-card p-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
            <Brain className="w-6 h-6 text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gradient-secondary">AI Spending Analysis</h2>
            <p className="text-sm text-foreground-muted">Predictive insights powered by machine learning</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Live Predictions</span>
        </div>
      </div>

      {/* Spending Prediction Chart */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">Spending Forecast</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={spendingData}>
              <defs>
                <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(193 100% 55%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(193 100% 55%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(258 90% 66%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(258 90% 66%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 20% 20%)" />
              <XAxis 
                dataKey="month" 
                stroke="hsl(210 15% 65%)" 
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(210 15% 65%)" 
                fontSize={12}
                tickFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="actual"
                stroke="hsl(193 100% 55%)"
                fillOpacity={1}
                fill="url(#actualGradient)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="predicted"
                stroke="hsl(258 90% 66%)"
                strokeDasharray="5 5"
                fillOpacity={1}
                fill="url(#predictedGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-card p-4 rounded-xl border border-glass-border">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="w-4 h-4 text-success" />
            <h4 className="font-medium text-foreground">Spending Trend</h4>
          </div>
          <p className="text-sm text-foreground-muted">Your spending is 12% lower than predicted this month</p>
        </div>
        
        <div className="bg-gradient-card p-4 rounded-xl border border-glass-border">
          <div className="flex items-center space-x-2 mb-2">
            <Brain className="w-4 h-4 text-secondary" />
            <h4 className="font-medium text-foreground">AI Prediction</h4>
          </div>
          <p className="text-sm text-foreground-muted">Next month: $3,400 estimated spending</p>
        </div>
        
        <div className="bg-gradient-card p-4 rounded-xl border border-glass-border">
          <div className="flex items-center space-x-2 mb-2">
            <Zap className="w-4 h-4 text-primary" />
            <h4 className="font-medium text-foreground">Smart Tip</h4>
          </div>
          <p className="text-sm text-foreground-muted">Increase savings by 15% to meet your goals</p>
        </div>
      </div>
    </div>
  );
};