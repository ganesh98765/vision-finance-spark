import { Bell, Settings, User, TrendingUp } from 'lucide-react';

export const DashboardHeader = () => {
  return (
    <header className="border-b border-glass-border bg-glass backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <TrendingUp className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gradient-primary">FinanceAI</h1>
              <p className="text-sm text-foreground-muted">Intelligent Financial Management</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button className="text-foreground hover:text-primary transition-colors">Dashboard</button>
            <button className="text-foreground-muted hover:text-primary transition-colors">Analytics</button>
            <button className="text-foreground-muted hover:text-primary transition-colors">Goals</button>
            <button className="text-foreground-muted hover:text-primary transition-colors">Budget</button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-foreground-muted hover:text-primary transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full animate-pulse-glow" />
            </button>
            <button className="p-2 text-foreground-muted hover:text-primary transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button className="flex items-center space-x-2 glass-card px-4 py-2 hover:bg-primary/10 transition-all">
              <div className="w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center">
                <User className="w-4 h-4 text-secondary-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground hidden sm:block">Alex Chen</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};