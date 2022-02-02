import "./Statistics.css";

const Statistics = () => {
  return (
    <section>
      <h2>Recent Calls</h2>
      <div className="statistics__wrapper">
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
      </div>
    </section>
  )
};

export default Statistics;