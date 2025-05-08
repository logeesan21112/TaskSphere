import React, { forwardRef } from 'react';
import Task from './Task';

const PrintableTable = forwardRef(({ data, refetch }, ref) => {
  return (
    <div ref={ref} style={{ width: '100%' }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data.map((cur, i) => (
              <Task key={i} data={cur} refetchTask={refetch} index={i} />
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">
                No Task
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
});

export default PrintableTable;
