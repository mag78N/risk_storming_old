constructor(props) {
    super(props);
    this.state = {
      bluecards: bluecards,
      chosenCards: this.getCardObjectsFromLocalStorage(),
      
    };
  }
  getCardObjectsFromLocalStorage() {
    const chosenCardIds = JSON.parse(localStorage.getItem('selectedBlueCards'));
    const newArray = [];
    for (let i = 0; i < 6; i++) {
      const chosenBlueCard = chosenCardIds[i];
      for (let j = 0; j < 20; j++) {
        const bluecardKey = Object.keys(bluecards)[j];
        const entireObject = Object.values(bluecards)[j];
        if (chosenBlueCard === bluecardKey) {
          newArray.push(entireObject);
        }
      }
    }
    return newArray;
  };
  componentDidMount() {}
  /* returnIndividualRisk() {
    const chosenCards = this.getCardObjectsFromLocalStorage();
    chosenCards.map((card, index) => {
      const risk = chosenCards[index]['risks'];
      console.log(risk);
      return risk;
    });
    this.setState({ riskId: risk });
  }; */
  handleChange = (e) => {
    this.state.chosenCards.map((card, index) => {
      const riskId = this.state.chosenCards[index]['risks'];
    });
    let value = e.target.value;
    // create a variable called "name" and store the name attribute in it
    // this variable's value will be unique for each text area
    let name = e.target.name;
    // set that to state, along with the input value
    this.setState({ riskId: e.target.value });
    console.log(this.state);
  };
  render() {
    const { chosenCards } = this.state;
    localStorage.setItem('chosenBlueCards', JSON.stringify(chosenCards));
    console.log(chosenCards);
    console.log(this.state);
    return (