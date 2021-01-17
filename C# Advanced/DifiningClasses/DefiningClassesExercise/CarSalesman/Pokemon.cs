﻿using System.Text;

namespace DefiningClasses
{
    public class Pokemon
    {
        private string name;
        private string element;
        private int health;

        public Pokemon(string name, string element, int health)
        {
            this.Name = name;
            this.Element = element;
            this.Health = health;
        }

        public string Name
        {
            get { return this.name; }
            set { this.name = value; }
        }

        public string Element
        {
            get { return this.element; }
            set { this.element = value; }
        }

        public int Health
        {
            get { return this.health; }
            set { this.health = value; }
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();

            sb
                .Append($"{this.Name} {this.Element} {this.Health}");

            return sb.ToString().TrimEnd();
        }
    }
}
