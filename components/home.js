function Home() {
  return (
    <Card
      bgcolor="info"
      txtcolor="white"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={
        <img
          src="images/bank.png"
          className="img-fluid"
          alt="Responsive image"/>}
    />
  );
}
