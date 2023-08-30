/**
 * Interface for log handling classes.
 */

import { IMessageQueue } from './IMessageQueue';

/**
 * Enumeration of LOG severities.
 */
export enum LOG_SEVERITIES {

  LOG_SEVERITY_ERROR = 'error',
  LOG_SEVERITY_LOG = 'log',
  LOG_SEVERIRY_NOTICE = 'notice',

}

export interface ILogger {

  /**
   * Sets a new message queue broker.
   * @param { IMessageQueue } mq_broker The message queue broker to use from now on.
   */
  set_mq_broker( mq_broker: IMessageQueue ): void;

}