using System.Collections.Generic;
using System.Threading.Tasks;
using api.Models;

namespace api.Interfaces
{
    public interface IStockRepository
    {
        Task<List<Stock>> GetAllAsync();  // Already defined

        Task<Stock> GetByIdAsync(int id);  // Add this to get a stock by its ID
        Task AddAsync(Stock stock);  // Add this to create a new stock
        Task UpdateAsync(Stock stock);  // Optionally, add an update method
        Task DeleteAsync(Stock stock);  // Optionally, add a delete method
    }
}
