import React, { useEffect, useState } from 'react';
import Logo from '../../assets/Logo.svg';
import './relatorio.css'
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import RelatorioBarra from '../../components/RelatorioGraph/relatorioBarra';
import api from '../../api';
import RelatorioCirculo from '../../components/RelatorioGraph/relatorioCirculo';
import CustomCaptionHorizontal from '../../components/CustomCaptionHorizontal';
import Colaborador from '../Colaborador';

const Relatorio: React.FC = () => {

    const [assignments, setAssignments] = useState<Array<any>>([]);
    const [assignmentsForSeptember, setAssignmentsForSeptember] = useState<Array<any>>([]);
    const [top3Assignments, setTop3Assignments] = useState<Array<any>>([]);
    const [colaboradores, setColaboradores] = useState<Array<Colaborador>>([]);

    const exportPDF = () => {
        const input = document.getElementById('div-total');
        
        if (!input) { // Verificar se o input não é null
            console.error("Não foi possível encontrar o elemento para exportar");
            return;
        }
    
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgWidth = 210; 
            const imgHeight = (canvas.height * imgWidth) / canvas.width; 
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save("download.pdf");
          });
    };
    
    
    const data = JSON.parse(localStorage['user']);
    
    const currentMonth = new Date().getMonth() + 1; 
    const getColaboradores = async () => {
        try {
            const response = await api.get(`/colaborator/all/${data.id}`);
            if (response.status === 200) {
                setColaboradores(response.data);
                console.log('??',response.data)
            } else {
                
                console.error("Erro ao obter colaboradores");
            }
        } catch (error) {
            console.error("Erro ao obter colaboradores:", error);
        }
    };
    

    const getAllAssignments = async () => {
        try {
            const response = await api.get(`/assign/all/manager/${data.id}`);
            if (response.status === 200) {
                setAssignments(response.data);
    
                
                const filteredAssignments = response.data.filter((assignment: any) => assignment.month ===11);
                setAssignmentsForSeptember(filteredAssignments);
                const sortedAssignments = response.data.sort((a: { result: number; }, b: { result: number; }) => b.result - a.result);
                const top3 = sortedAssignments.slice(0, 3);
                
                
                setTop3Assignments(top3);
            
                console.log("assignments", response.data); 
            } else {
                console.error("Erro ao obter todas as designações");
            }
        } catch (error) {
            console.error("Erro ao obter todas as designações:", error);
        }
    };
    console.log('TOP3',top3Assignments);

    

    useEffect(() => {
        const fetchData = async () => {
            await getAllAssignments();
            await getColaboradores();

            console.log('aloalo',colaboradores);
          
          
            const top3Results = assignments
                .sort((a, b) => b.result - a.result)
                .slice(0, 3);
    
            const top3ColaboradorIds = top3Results.map(assignment => assignment.colaboradorId);
    
            const top3Colaboradores = colaboradores.filter(colab => top3ColaboradorIds.includes(colab.id));
    
            console.log('PEGAPF',top3Colaboradores);
        };
    
        fetchData();
    }, [data.id]);
    

    return (

       
        <div className="div-total" id= "div-total">

            <div className="div-top">
    
                        <div className="logo-container">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className="header-container">
                            <div className="header flex flex-col space-y-4">
                                <h1 className="string-relatorio text-3xl text-black font-bold">Relatório do mês de Setembro</h1>
                            </div>
                        </div>
            </div>
         
          <div className="div-bottom">
           <div className="div-item">
           <div className="header-group">
                <h1>Relatorio 1</h1>
                <textarea defaultValue="Lorem ipsum ..." className="relatorio-input"></textarea>
                </div>
                <div className="header-group">
                    <h1>Relatório 1</h1>
                    <textarea defaultValue="Lorem ipsum ..." className="relatorio-input"></textarea>
                </div>
            </div>

            <div className="div-item4">
                <h1>Histórico de Indicadores</h1>
               <div className='graf'>
                <RelatorioBarra indicatorData={assignmentsForSeptember} />
                </div>
                <div className="strings-legenda">
                    <CustomCaptionHorizontal payload={[{ value: 'Meta', color: '#E51110' }]} />
                    <CustomCaptionHorizontal payload={[{ value: 'Super Meta', color: '#626FD9' }]} />
                    <CustomCaptionHorizontal payload={[{ value: 'Desafio', color: '#5EE0F1' }]} />
                </div>
            </div>


            <div className="grafs-container">
                <h1>Gráfico de metas</h1>
                <div className="images">
                    <RelatorioCirculo indicatorData={assignmentsForSeptember} dataType="meta" />
                    <RelatorioCirculo indicatorData={assignmentsForSeptember} dataType="superMeta" />
                    <RelatorioCirculo indicatorData={assignmentsForSeptember} dataType="challenge" />
                </div>
                <div className="strings">
                    <CustomCaptionHorizontal payload={[{ value: 'Meta', color: '#E51110' }]} />
                    <CustomCaptionHorizontal payload={[{ value: 'Super Meta', color: '#626FD9' }]} />
                    <CustomCaptionHorizontal payload={[{ value: 'Desafio', color: '#5EE0F1' }]} />
                </div>
            </div>



            <div className="div-item2">
                <h1>Destaques do mês</h1>
                {colaboradores.slice(0, 3).map((colaborador, index) => (
                    <div key={index} className="user-info">
                        <img src={colaborador.imgUrl} alt="user icon" className="user-icon"/>
                        <div>
                            <p className="user-name">{colaborador.name}</p>
                            <p className="user-email">{colaborador.email}</p>   
                            <p className="user-indicator">{colaborador.id}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="header-group2">
                <h1>Relatório 1</h1>
                    <textarea defaultValue="Lorem ipsum ..." className="relatorio-input"></textarea>
                </div>
                <div className="div-item6">
                    <div className="signatures">
                
                        <div className="signature-container">
                            <input type="text" id="signature1" className="signature" />
                            <label htmlFor="signature1" className="signature-label">Diretor</label>
                        </div>
                        <div className="signature-container">
                            <input type="text" id="signature2" className="signature" />
                            <label htmlFor="signature2" className="signature-label">Coordenador</label>
                        </div>
                    </div>
                </div>
               


            </div>
            <div className="-relatorio-botao-container">
            <button className="botao-pdf"onClick={exportPDF}>Exportar como PDF</button>
            </div>

        </div>
        
      
    );

};

export default Relatorio;