import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useGetAllTaskQuery } from '../provider/redux/queries/Task';

const ExportPDF = () => {
  const { data: tasks, isLoading } = useGetAllTaskQuery();

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Task Report", 14, 10);

    const tableColumn = ["S.No", "Title", "Description", "Status"];
    const tableRows = [];

    tasks?.forEach((task, index) => {
      const taskData = [
        index + 1,
        task.title,
        task.description,
        task.status ? "Completed" : "Pending"
      ];
      tableRows.push(taskData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("task_report.pdf");
  };

  return (
    <div className="container mt-4">
      <h2>Export Tasks</h2>
      <button className="btn btn-info my-3" onClick={downloadPDF}>Download PDF</button>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr><td colSpan="4">Loading...</td></tr>
            ) : (
              tasks?.map((task, index) => (
                <tr key={task._id}>
                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.status ? "Completed" : "Pending"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExportPDF;
