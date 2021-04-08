﻿namespace Animals
{
    public abstract class Animal : IAnimal
    {
        public Animal(string name, string favoriteFood)
        {
            this.Name = name;
            this.FavoriteFood = favoriteFood;
        }

        public string Name { get; private set; }

        public string FavoriteFood { get; private set; }

        public virtual string ExplainSelf()
        {
            return $"I am {this.Name} and my favourite food is {FavoriteFood}";
        }
    }
}
