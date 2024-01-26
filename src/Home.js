import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

//removed the <h3> and added <section because console said an h3 can't be a child of an h5
//PUT THE H3 BACK 5:54 1/21
function Home() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
        <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
