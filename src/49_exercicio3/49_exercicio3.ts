type VotationOption = {
  numberOfVotes: number;
  option: string;
};

class Votation {
  private _votationOptions: VotationOption[] = [];

  constructor(public ask: string) {}

  addVotationOption(VotationOption: VotationOption): void {
    this._votationOptions.push(VotationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;

    this._votationOptions[votationIndex].numberOfVotes++;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

class VoteApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation) {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.ask);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
    }
    console.log('###');
    console.log('');
  }
}

const votation1 = new Votation(
  'Qual é sua linguagem de programação preferida ?',
);
votation1.addVotationOption({ numberOfVotes: 0, option: 'TypeScript' });
votation1.addVotationOption({ numberOfVotes: 0, option: 'JavaScript' });
votation1.addVotationOption({ numberOfVotes: 0, option: 'Python' });
votation1.vote(0);
votation1.vote(0);
votation1.vote(0);
votation1.vote(2);
votation1.vote(2);
votation1.vote(1);

const votatioApp = new VoteApp();
votatioApp.addVotation(votation1);
votatioApp.showVotations();
