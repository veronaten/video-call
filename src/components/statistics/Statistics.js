import "./Statistics.css"
import Button from "../button/Button"

function Statistics() {
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
            <Button className="button__delete">Delete</Button>
          </tr>
          <tr>
            <td>2</td>
            <td>2022.02.02</td>
            <td>07.07.03</td>
            <td>07.09.05</td>
            <td>00.02.02</td>
            <Button className="button__delete">Delete</Button>
          </tr>
          <tr>
            <td>3</td>
            <td>2022.02.02</td>
            <td>07.07.03</td>
            <td>07.09.05</td>
            <td>00.02.02</td>
            <Button className="button__delete">Delete</Button>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Statistics
