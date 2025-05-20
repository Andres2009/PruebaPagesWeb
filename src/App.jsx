import './App.css';
import { LanguageProvider } from './context/context';
import AppRoutes from './routes/AppRoutes';
function App() {
  return (
    <div className="Fondo__App">
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </div>
  );
}
export default App;
