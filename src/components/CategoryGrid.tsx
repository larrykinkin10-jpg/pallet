import React from 'react';
import { ArrowRight, Tag, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/categories';

interface CategoryGridProps {
  onSelectCategory: (categoryId: string) => void;
  selectedCategoryId: string | null;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  onSelectCategory,
  selectedCategoryId
}) => {
  return (
    <section className="py-12 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
              <Tag className="w-3.5 h-3.5" />
              <span>Shop by Department</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Explore Liquidation Categories
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Direct excess inventory and certified overstock across {CATEGORIES.length} top consumer departments with up to 80% savings.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {CATEGORIES.map(category => {
            const isSelected = selectedCategoryId === category.id;

            return (
              <div
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer border transition-all h-44 flex flex-col justify-end p-3.5 ${
                  isSelected
                    ? 'border-emerald-500 ring-2 ring-emerald-500/20'
                    : 'border-slate-800 hover:border-slate-700 bg-slate-900'
                }`}
              >
                {/* Background Image with Dark Vignette */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-40 group-hover:opacity-55"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

                {/* Content */}
                <div className="relative z-10">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                    {category.itemCount} Deals
                  </span>
                  <h3 className="text-xs sm:text-sm font-black text-white group-hover:text-emerald-300 transition-colors leading-tight mt-0.5">
                    {category.name}
                  </h3>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/80 text-[10px] text-slate-400">
                    <span className="truncate">{category.popularBrands.slice(0, 2).join(', ')}</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-transform shrink-0 ml-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
