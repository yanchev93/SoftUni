﻿namespace OnlineShop.Models.Products
{
    public class RandmoAccessMemory : Component
    {
        private const double MULTIPLIER = 1.20;

        public RandmoAccessMemory(int id, string manufacturer, string model,
            decimal price, double overallPerfomance, int generation) 
            : base(id, manufacturer, model, price, overallPerfomance, generation)
        {
            this.OverallPerformance = overallPerfomance * MULTIPLIER;
        }
    }
}
