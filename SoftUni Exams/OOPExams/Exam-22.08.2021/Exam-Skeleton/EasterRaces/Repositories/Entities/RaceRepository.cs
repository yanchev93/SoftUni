﻿namespace EasterRaces.Repositories.Entities
{
    using System;
    using System.Linq;
    using System.Collections.Generic;

    using EasterRaces.Models.Races.Contracts;
    using EasterRaces.Repositories.Contracts;

    public class RaceRepository : IRepository<IRace>
    {
        private readonly List<IRace> races;

        public RaceRepository()
        {
            this.races = new List<IRace>();
        }

        public void Add(IRace model)
        {
            this.races.Add(model);
        }

        public IReadOnlyCollection<IRace> GetAll()
        {
            return this.races.ToArray();
        }

        public IRace GetByName(string name)
        {
            return this.races.FirstOrDefault(r => r.Name == name);
        }

        public bool Remove(IRace model)
        {
            return this.races.Remove(model);
        }
    }
}
