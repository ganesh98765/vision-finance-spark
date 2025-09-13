import { useState, useEffect } from 'react';
import { DashboardHeader } from './dashboard/DashboardHeader';
import { OverviewCards } from './dashboard/OverviewCards';
import { ExpenseTracker } from './dashboard/ExpenseTracker';
import { GoalTracker } from './dashboard/GoalTracker';
import { BudgetAlerts } from './dashboard/BudgetAlerts';
import { PredictiveAnalytics } from './dashboard/PredictiveAnalytics';
import heroBg from '@/assets/hero-bg.jpg';

export const Dashboard = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for smooth animations
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-background relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="fixed inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Animated Background Effects */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-warning/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-background/50 via-background/80 to-background-secondary/90" />

      {/* Main Content */}
      <div className="relative z-10">
        <DashboardHeader />
        
        <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
          {/* Overview Section */}
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <OverviewCards />
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Left Column - Analytics */}
            <div className={`xl:col-span-2 space-y-8 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <PredictiveAnalytics />
              <ExpenseTracker />
            </div>

            {/* Right Column - Goals & Alerts */}
            <div className={`space-y-8 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <BudgetAlerts />
              <GoalTracker />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};