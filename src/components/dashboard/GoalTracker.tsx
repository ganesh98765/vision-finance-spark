import { Target, Calendar, Trophy, Plus, TrendingUp } from 'lucide-react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const goals = [
  {
    id: 1,
    title: 'Emergency Fund',
    description: '6 months of expenses',
    current: 8500,
    target: 15000,
    progress: 57,
    deadline: '2024-12-31',
    category: 'Safety',
    color: 'hsl(193 100% 55%)',
  },
  {
    id: 2,
    title: 'Vacation to Japan',
    description: 'Dream trip savings',
    current: 3200,
    target: 8000,
    progress: 40,
    deadline: '2024-08-15',
    category: 'Travel',
    color: 'hsl(258 90% 66%)',
  },
  {
    id: 3,
    title: 'New Laptop',
    description: 'MacBook Pro M3',
    current: 1800,
    target: 2500,
    progress: 72,
    deadline: '2024-06-01',
    category: 'Tech',
    color: 'hsl(142 76% 36%)',
  },
];

const achievements = [
  { title: 'First $1K Saved', completed: true },
  { title: 'Budget Master', completed: true },
  { title: 'Streak Hero', completed: false },
];

export const GoalTracker = () => {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">Financial Goals</h2>
            <p className="text-sm text-foreground-muted">Track your progress</p>
          </div>
        </div>
        <button className="btn-glass p-2">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Goals List */}
      <div className="space-y-6 mb-8">
        {goals.map((goal, index) => {
          const monthsLeft = Math.ceil((new Date(goal.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24 * 30));
          
          return (
            <div
              key={goal.id}
              className="bg-gradient-card p-5 rounded-xl border border-glass-border hover-scale animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center space-x-4">
                {/* Progress Circle */}
                <div className="w-16 h-16">
                  <CircularProgressbar
                    value={goal.progress}
                    text={`${goal.progress}%`}
                    styles={buildStyles({
                      textColor: 'hsl(210 40% 98%)',
                      pathColor: goal.color,
                      trailColor: 'hsl(222 25% 16%)',
                      textSize: '24px',
                      pathTransitionDuration: 1.5,
                    })}
                  />
                </div>

                {/* Goal Details */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{goal.title}</h3>
                    <span className="text-sm px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {goal.category}
                    </span>
                  </div>
                  <p className="text-sm text-foreground-muted mb-3">{goal.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">
                      ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                    </span>
                    <div className="flex items-center space-x-1 text-foreground-muted">
                      <Calendar className="w-3 h-3" />
                      <span>{monthsLeft} months left</span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-3 w-full bg-muted rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-1000"
                      style={{
                        width: `${goal.progress}%`,
                        backgroundColor: goal.color,
                        animationDelay: `${index * 200 + 500}ms`
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Monthly Target */}
              <div className="mt-4 pt-4 border-t border-glass-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground-muted">Monthly target:</span>
                  <span className="text-primary font-medium">
                    ${Math.ceil((goal.target - goal.current) / monthsLeft).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Achievements */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Trophy className="w-5 h-5 text-warning" />
          <h3 className="font-semibold text-foreground">Achievements</h3>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                achievement.completed 
                  ? 'bg-success/10 border border-success/20' 
                  : 'bg-muted/20 border border-muted/20'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                achievement.completed ? 'bg-success text-success-foreground' : 'bg-muted'
              }`}>
                {achievement.completed ? <Trophy className="w-3 h-3" /> : <div className="w-2 h-2 bg-foreground-muted rounded-full" />}
              </div>
              <span className={`text-sm ${achievement.completed ? 'text-success' : 'text-foreground-muted'}`}>
                {achievement.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};