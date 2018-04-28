import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.sample{
   export class Share extends Asset {
      shareId: string;
      description: string;
      company: string;
      votedecision: string;
      sharequantity: number;
      owner: Shareholder;
      issuer: Institution;
   }
   export class Shareholder extends Participant {
      shareholderId: string;
      firstName: string;
      lastName: string;
   }
   export class Institution extends Participant {
      InstitutionId: string;
      firstName: string;
      lastName: string;
   }
   export class Regulator extends Participant {
      RegulatorId: string;
      firstName: string;
      lastName: string;
   }
   export class MakeVote extends Transaction {
      share: Share;
      newVoteDecision: string;
   }
   export class TransferShare extends Transaction {
      share: Share;
      newShareHolder: Shareholder;
   }
// }
