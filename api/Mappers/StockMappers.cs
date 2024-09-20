using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Stock;
using api.Models;
using api.Dtos;



namespace api.Mappers
{
    public static class StockMappers
    {
        public static StockDto ToStockDto(this Stock stock)
        {
            return new StockDto
            {
                Id = stock.Id,
                CompanyName = stock.CompanyName,
                Symbol = stock.Symbol,
                Purchase = stock.Purchase,
                LastDiv = stock.LastDiv,
                Industry = stock.Industry,
                MarketCap = stock.MarketCap
            };
        }

        public static Stock ToStock(this CreateStockRequestDto createStockRequest)
        {
            return new Stock
            {
                CompanyName = createStockRequest.CompanyName,
                Symbol = createStockRequest.Symbol,
                Purchase = createStockRequest.Purchase,
                LastDiv = createStockRequest.LastDiv,
                Industry = createStockRequest.Industry,
                MarketCap = createStockRequest.MarketCap
            };
        }
    }
}