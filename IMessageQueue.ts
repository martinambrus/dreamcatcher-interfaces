/**
 * Interface for a message queue broker.
 */
export interface IMessageQueue {

  /**
   * Sends message to the message queue.
   *
   * @param { Object } msg      Message data to publish. Will be converted into a JSON string.
   * @param { string } trace_id Optional. ID of the tracing software's root span, so we can continue
   *                            tracing the request as it flows through the relevant microservices.
   * @return Promise<void>
   */
  send( message: Object, trace_id?: string ): Promise<void>;

}