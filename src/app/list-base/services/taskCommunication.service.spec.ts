/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaskCommunicationService } from './taskCommunication.service';

describe('Service: TaskCommunication', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskCommunicationService]
    });
  });

  it('should ...', inject([TaskCommunicationService], (service: TaskCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
