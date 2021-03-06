import axios from 'axios';

export class ApiClient {
  constructor({ url }) {
    this.client = axios.create({
      baseURL: url,
    });
  }

  createSensorMeasurements({ measurements, systemId }) {
    return this.client
      .post(`/api/v1/systems/${systemId}/sensor-measurements`, measurements)
      .then(({ data }) => data);
  }

  createPumpMeasurements({ measurements, systemId }) {
    return this.client
      .post(`/api/v1/systems/${systemId}/pump-measurements`, measurements)
      .then(({ data }) => data);
  }

  createBinarySensorMeasurements({ measurements, systemId }) {
    return this.client
      .post(`/api/v1/systems/${systemId}/binary-sensor-measurements`, measurements)
      .then(({ data }) => data);
  }

  updatePump({ systemId, type, update }) {
    return this.client
      .put(`/api/v1/systems/${systemId}/pumps/${type}`, update)
      .then(({ data }) => data);
  }
}

export default ApiClient;
