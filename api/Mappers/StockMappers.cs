using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Stock;
using api.Models;

namespace api.Mappers
{
    public static class StockMappers
    {
        public static StockDto ToStockDto(this Stock stockModel)
        {
            return new StockDto
            {
                Id = stockModel.Id,
                Symbol = stockModel.Symbol,
                CompanyName = stockModel.CompanyName,
                Purchase = stockModel.Purchase,
                LastDiv = stockModel.LastDiv,
                Industry = stockModel.Industry,
                MarketCap = stockModel.MarketCap,
                Comments = stockModel.Comments.Select(c => c.ToCommentDto()).ToList()
            };
        }
        public static Stock ToStockFromCreateDto(this CreateStock createStock)
        {
            return new Stock
            {
                CompanyName = createStock.CompanyName,
                Symbol = createStock.Symbol,
                Purchase = createStock.Purchase,
                LastDiv = createStock.LastDiv,
                Industry = createStock.Industry,
                MarketCap = createStock.MarketCap
            };
            }
        }
    }