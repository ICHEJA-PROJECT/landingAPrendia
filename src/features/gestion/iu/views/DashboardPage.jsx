import { useState, useEffect } from 'react';
import { CardsDash, ChartDash } from "../components/organisms";
import { getStats, getTopMunicipalities } from '../../services/dashboardService';

export const DashboardPage = () => {
  const [stats, setStats] = useState({
    totalRegistros: 0,
    registrosAtendidos: 0,
    registrosNoAtendidos: 0
  });
  const [municipalitiesData, setMunicipalitiesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch stats
      const statsData = await getStats();
      if (statsData.success) {
        setStats({
          totalRegistros: statsData.totalRegistros,
          registrosAtendidos: statsData.registrosAtendidos,
          registrosNoAtendidos: statsData.registrosNoAtendidos
        });
      }

      // Fetch top municipalities
      const municipalitiesResponse = await getTopMunicipalities();
      if (municipalitiesResponse.success && municipalitiesResponse.data.length > 0) {
        setMunicipalitiesData(municipalitiesResponse.data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex w-full flex-col gap-6">
      <CardsDash
        totalRegistros={stats.totalRegistros}
        registrosAtendidos={stats.registrosAtendidos}
        registrosNoAtendidos={stats.registrosNoAtendidos}
      />
      <ChartDash municipalitiesData={municipalitiesData} />
    </div>
  );
};
