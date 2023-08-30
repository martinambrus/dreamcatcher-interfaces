/**
 * Interface for log handling classes.
 */

import { IMessageQueue } from './IMessageQueue.js';

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

  /**
   * Formats a log message by prefixing it with date/time and client ID.
   *
   * @param { string } msg Message to format for logging purposes.
   *
   * @return { string } Returns a correctly formatted log message.
   */
  format(msg: string): string;

}