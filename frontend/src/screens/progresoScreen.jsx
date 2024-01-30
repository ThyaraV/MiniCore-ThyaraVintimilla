import React from 'react';
import { useGetWeightedProgressQuery } from '../slices/progresoApiSlice.js';

const ProgresoScreen = () => {
  const { data: userProgress, isLoading, error } = useGetWeightedProgressQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Weighted Progress</h1>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Progreso 1</th>
            <th>Progreso 2</th>
            <th>Progreso 3</th>
          </tr>
        </thead>
        <tbody>
          {userProgress.map((progress) => (
            <tr key={progress.name}>
              <td>{progress.name}</td>
              <td>{progress['Progreso 1']}</td>
              <td>{progress['Progreso 2']}</td>
              <td>{progress['Progreso 3']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgresoScreen;


/*import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useGetGradesQuery } from '../slices/gradesApiSlice.js';
import { useGetProgresosQuery } from '../slices/progresoApiSlice.js';
import '../assets/styles/index.css'; // Asegúrate de que la ruta sea correcta

const ProgresoScreen = () => {
  const { data: grades, isLoading, error } = useGetGradesQuery();
  
  //const { data: progresos, isLoading, error } = useGetProgresosQuery();

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <div>{error?.data?.message || error.error}</div>;

  return (
    <>
        <h1>User Progress</h1>
        <Row>
            <Col xs={12}>
                <table className="customTable">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Progreso 1</th>
                            <th>Progreso 2</th>
                            <th>Progreso 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userProgress.map((progress, index) => (
                            <tr key={index}>
                                <td>{progress.name}</td>
                                <td>{progress['Progreso 1']}</td>
                                <td>{progress['Progreso 2']}</td>
                                <td>{progress['Progreso 3']}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Col>
        </Row>
    </>
);
};

export default ProgresoScreen;*/
