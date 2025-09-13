import { AlertTriangle, CheckCircle, XCircle, TrendingUp, Target } from 'lucide-react';

const alerts = [
  {
    id: 1,
    type: 'warning',
    title: 'Dining Budget Alert',
    message: 'You\'ve spent 87% of your dining budget this month',
    amount: '$847 of $950',
    severity: 'high',
    icon: AlertTriangle,
  },
  {
    id: 2,
    type: 'success',
    title: 'Transportation On Track',
    message: 'Great job! You\'re under budget this month',
    amount: '$623 of $800',
    severity: 'low',
    icon: CheckCircle,
  },
  {
    id: 3,
    type: 'error',
    title: 'Shopping Over Budget',
    message: 'You\'ve exceeded your shopping budget by $92',
    amount: '$592 of $500',
    severity: 'critical',
    icon: XCircle,
  },
];

const budgetGoals = [
  {
    name: 'Monthly Savings',
    current: 1250,
    target: 1500,
    progress: 83,
    color: 'hsl(193 100% 55%)',
  },
  {
    name: 'Emergency Fund',
    current: 8500,
    target: 10000,
    progress: 85,
    color: 'hsl(142 76% 36%)',
  },
  {
    name: 'Vacation Fund',
    current: 2300,
    target: 5000,
    progress: 46,
    color: 'hsl(258 90% 66%)',
  },
];

export const BudgetAlerts = () => {
  return (
    <div className="space-y-6">
      {/* Budget Alerts */}
      <div className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-warning/10 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-warning" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">Budget Alerts</h2>
            <p className="text-sm text-foreground-muted">Real-time spending notifications</p>
          </div>
        </div>

        <div className="space-y-4">
          {alerts.map((alert, index) => {
            const Icon = alert.icon;
            const severity = alert.severity;
            
            return (
              <div
                key={alert.id}
                className={`bg-gradient-card p-4 rounded-xl border transition-all duration-300 hover-scale animate-slide-up ${
                  severity === 'critical' ? 'border-destructive/30 shadow-destructive/20' :
                  severity === 'high' ? 'border-warning/30 shadow-warning/20' :
                  'border-success/30 shadow-success/20'
                } shadow-md`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    alert.type === 'error' ? 'bg-destructive/10' :
                    alert.type === 'warning' ? 'bg-warning/10' :
                    'bg-success/10'
                  }`}>
                    <Icon className={`w-4 h-4 ${
                      alert.type === 'error' ? 'text-destructive' :
                      alert.type === 'warning' ? 'text-warning' :
                      'text-success'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium text-foreground">{alert.title}</h3>
                      <span className="text-sm font-medium text-foreground">{alert.amount}</span>
                    </div>
                    <p className="text-sm text-foreground-muted">{alert.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Budget Progress */}
      <div className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">Budget Progress</h2>
            <p className="text-sm text-foreground-muted">Track your financial goals</p>
          </div>
        </div>

        <div className="space-y-6">
          {budgetGoals.map((goal, index) => (
            <div key={goal.name} className="animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-foreground">{goal.name}</h3>
                <span className="text-sm font-medium text-foreground">
                  ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                </span>
              </div>
              <div className="relative">
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className="h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${goal.progress}%`,
                      backgroundColor: goal.color,
                      boxShadow: `0 0 10px ${goal.color}40`,
                      animationDelay: `${index * 200 + 500}ms`
                    }}
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-foreground-muted">{goal.progress}% complete</span>
                  <span className="text-xs text-foreground-muted">
                    ${(goal.target - goal.current).toLocaleString()} remaining
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};