﻿namespace Cars
{
    using System;
    public class StartUp
    {
        public static void Main()
        {
            ICar seat = new Seat("Seat", "Grey");
            ICar tesla = new Tesla("Model 3", "Red", 2);

            Console.WriteLine(seat.ToString());
            Console.WriteLine(tesla.ToString());
        }
    }
}