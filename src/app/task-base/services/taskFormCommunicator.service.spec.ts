/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaskFormCommunicatorService } from './taskFormCommunicator.service';

describe('Service: TaskFormCommunicator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskFormCommunicatorService]
    });
  });

  it('should ...', inject([TaskFormCommunicatorService], (service: TaskFormCommunicatorService) => {
    expect(service).toBeTruthy();
  }));
});
