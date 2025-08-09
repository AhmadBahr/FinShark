# FinShark - Financial Analysis Platform

A comprehensive financial analysis and portfolio management platform built with React and ASP.NET Core.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![ASP.NET Core](https://img.shields.io/badge/ASP.NET_Core-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SQL Server](https://img.shields.io/badge/SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Entity Framework](https://img.shields.io/badge/Entity_Framework-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)

## ✨ Features

- 📊 **Stock Analysis** - Comprehensive financial data and ratios
- 💼 **Portfolio Management** - Track and manage your investment portfolios
- 🔍 **Company Search** - Find and analyze companies with detailed profiles
- 📈 **Financial Statements** - Income statements, balance sheets, and cash flow analysis
- 💬 **Community Features** - Comment and discuss stocks with other investors
- 🔐 **User Authentication** - Secure registration and login system
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎨 **Modern UI** - Built with Tailwind CSS and React Icons

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- .NET 7.0 SDK
- SQL Server

### Backend Setup
```bash
# Clone the repository
git clone <repository-url>
cd FinShark/api

# Configure database connection in appsettings.json
# Run the application
dotnet run
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd ../src

# Install dependencies
npm install

# Start development server
npm start
```

Visit `http://localhost:3000` to see the application.

## 🛠️ Tech Stack

**Frontend:**
- React 18 + TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Axios for API communication
- React Hook Form + Yup for form handling
- Recharts for data visualization
- React Icons for UI icons

**Backend:**
- ASP.NET Core 7.0
- Entity Framework Core
- SQL Server Database
- JWT Authentication
- Swagger/OpenAPI documentation

## 📁 Project Structure

```
FinShark/
├── src/                    # React frontend
│   ├── Components/         # UI components
│   │   ├── CompanyProfile/ # Company analysis components
│   │   ├── Portfolio/      # Portfolio management
│   │   ├── Search/         # Search functionality
│   │   └── ...
│   ├── Pages/             # Application pages
│   ├── Services/          # API services
│   ├── Context/           # React context
│   └── Models/            # TypeScript interfaces
└── api/                   # ASP.NET Core backend
    ├── Controllers/       # API endpoints
    ├── Models/           # Data models
    ├── Services/         # Business logic
    ├── Repository/       # Data access layer
    └── Dtos/            # Data transfer objects
```

## 🔧 Configuration

### Database Setup
Update `api/appsettings.json`:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=FinSharkDB;Trusted_Connection=true;TrustServerCertificate=true;"
  }
}
```

### API Configuration
Update `src/api.tsx` with your backend URL if needed.

## 📚 API Endpoints

**Authentication:**
- `POST /api/Account/register` - Register new user
- `POST /api/Account/login` - User login

**Stocks:**
- `GET /api/Stock` - Get all stocks
- `GET /api/Stock/{symbol}` - Get stock details
- `POST /api/Stock` - Create new stock
- `PUT /api/Stock/{id}` - Update stock
- `DELETE /api/Stock/{id}` - Delete stock

**Portfolios:**
- `GET /api/Portfolio` - Get user portfolios
- `POST /api/Portfolio` - Create portfolio
- `DELETE /api/Portfolio/{id}` - Delete portfolio

**Comments:**
- `GET /api/Comment` - Get stock comments
- `POST /api/Comment` - Create comment
- `PUT /api/Comment/{id}` - Update comment
- `DELETE /api/Comment/{id}` - Delete comment

## 🚀 Deployment

**Frontend:**
```bash
cd src
npm run build
```

**Backend:**
```bash
cd api
dotnet publish -c Release
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using React and ASP.NET Core**
