import "./Statistics.css";

const Statistics = () => {
  return (
    <section>
      <h2>Recent Calls</h2>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Data</th>
            <th>Started</th>
            <th>Ended</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2022.02.02</td>
            <td>07.07.03</td>
            <td>07.09.05</td>
            <td>00.02.02</td>
            <button className="button__delete">Delete</button>
          </tr>
          <tr>
            <td>2</td>
            <td>2022.02.02</td>
            <td>07.07.03</td>
            <td>07.09.05</td>
            <td>00.02.02</td>
            <button className="button__delete">Delete</button>
          </tr>
          <tr>
            <td>3</td>
            <td>2022.02.02</td>
            <td>07.07.03</td>
            <td>07.09.05</td>
            <td>00.02.02</td>
            <button className="button__delete">Delete</button>
          </tr>
        </tbody>
      </table>
      {/* <div className="statistics__wrapper">
        <div className="statistics__header">
          <div>#</div>
          <div>Data</div>
          <div>Started</div>
          <div>Ended</div>
          <div>Duration</div>
          <div>Icon</div>
        </div>

        <div className="statsitics__items">
          <div>1</div>
          <div>2022.02.02</div>
          <div>07:07:07</div>
          <div>07:09:09</div>
          <div>00:02:02</div>
          <div>Icon</div>
        </div>

        <div className="statsitics__items">
          <div>1</div>
          <div>2022.02.02</div>
          <div>07:07:07</div>
          <div>07:09:09</div>
          <div>00:02:02</div>
          <div>Icon</div>
        </div>
      </div> */}
    </section>
  )
};

export default Statistics;