import '../App.css';

const Body = () => {
    return (
        <form className="divForm">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>
  <button type="submit" class="btn btn-primary mt-2">Submit</button>
</form>
    )
}

export default Body;