import { AppBase } from './AppBase';
import { env } from 'src/environments/environment-loader';
export class AppWeatherURLs extends AppBase {

    getUrls() {
      return {
        // getForecastUrl: this.getBaseUrl() + 'forecast?q=',
        // getForecastUrl2: this.getMockUrl() + 'forecast'
        getForecastUrl: {url: this.getBaseUrl() + 'forecast?q=', httpMethod: 'GET2'},
        getForecastUrl2: {url: this.getMockUrl() + 'forecast', httpMethod: 'GET'}
      };
    }
  
}