﻿namespace P03.ShopingSpree
{
    using System;
  
    public class StartUp
    {
        public static void Main()
        {
            try
            {
                Engine engine = new Engine();
                engine.Run();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
}
