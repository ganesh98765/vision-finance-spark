import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';
import { ShoppingCart, Car, Home, Utensils, Gamepad2, Plus } from 'lucide-react';

const expenseCategories = [
  { name: 'Food & Dining', value: 847, color: 'hsl(193 100% 55%)', icon: Utensils },
  { name: 'Transportation', value: 623, color: 'hsl(258 90% 66%)', icon: Car },
  { name: 'Shopping', value: 592, color: 'hsl(142 76% 36%)', icon: ShoppingCart },
  { name: 'Housing', value: 1185, color: 'hsl(48 96% 53%)', icon: Home },
  { name: 'Entertainment', value: 234, color: 'hsl(0 84% 60%)', icon: Gamepad2 },
];

const weeklySpending = [
  { day: 'Mon', amount: 127 },
  { day: 'Tue', amount: 89 },
  { day: 'Wed', amount: 156 },
  { day: 'Thu', amount: 203 },
  { day: 'Fri', amount: 187 },
  { day: 'Sat', amount: 245 },
  { day: 'Sun', amount: 98 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3 border-glass">
        <p className="text-sm font-medium text-foreground">{payload[0].name}</p>
        <p className="text-sm text-primary">${payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export const ExpenseTracker = () => {
  const totalExpenses = expenseCategories.reduce((sum, cat) => sum + cat.value, 0);

  return (
    <div className="glass-card p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold text-gradient-primary">Expense Categories</h2>
          <p className="text-sm text-foreground-muted">AI-powered automatic categorization</p>
        </div>
        <button className="btn-hero flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Expense</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Pie Chart */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Category Breakdown</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseCategories}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {expenseCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weekly Spending */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Weekly Activity</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklySpending}>
                <XAxis dataKey="day" stroke="hsl(210 15% 65%)" fontSize={12} />
                <YAxis stroke="hsl(210 15% 65%)" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="amount" 
                  fill="hsl(193 100% 55%)" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Category List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Category Details</h3>
        <div className="grid gap-4">
          {expenseCategories.map((category, index) => {
            const Icon = category.icon;
            const percentage = ((category.value / totalExpenses) * 100).toFixed(1);
            
            return (
              <div key={category.name} className="bg-gradient-card p-4 rounded-xl border border-glass-border hover-scale">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: category.color + '20' }}>
                      <Icon className="w-5 h-5" style={{ color: category.color }} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{category.name}</h4>
                      <p className="text-sm text-foreground-muted">{percentage}% of total</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-foreground">${category.value}</p>
                    <p className="text-xs text-success">-12% from last month</p>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-700"
                      style={{ 
                        width: `${percentage}%`, 
                        backgroundColor: category.color,
                        animationDelay: `${index * 200}ms`
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};