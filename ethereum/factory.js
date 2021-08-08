import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x67097DE2fa8Ac717C06eb340e522be674d66d4a0"
);

export default instance;
