/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { butlerGetButlerTasks } from "../funcs/butlerGetButlerTasks.js";
import { butlerStartAllTasks } from "../funcs/butlerStartAllTasks.js";
import { butlerStartTask } from "../funcs/butlerStartTask.js";
import { butlerStopAllTasks } from "../funcs/butlerStopAllTasks.js";
import { butlerStopTask } from "../funcs/butlerStopTask.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Butler extends ClientSDK {
  /**
   * Get Butler tasks
   *
   * @remarks
   * Returns a list of butler tasks
   */
  async getButlerTasks(
    options?: RequestOptions,
  ): Promise<operations.GetButlerTasksResponse> {
    return unwrapAsync(butlerGetButlerTasks(
      this,
      options,
    ));
  }

  /**
   * Start all Butler tasks
   *
   * @remarks
   * This endpoint will attempt to start all Butler tasks that are enabled in the settings. Butler tasks normally run automatically during a time window configured on the server's Settings page but can be manually started using this endpoint. Tasks will run with the following criteria:
   * 1. Any tasks not scheduled to run on the current day will be skipped.
   * 2. If a task is configured to run at a random time during the configured window and we are outside that window, the task will start immediately.
   * 3. If a task is configured to run at a random time during the configured window and we are within that window, the task will be scheduled at a random time within the window.
   * 4. If we are outside the configured window, the task will start immediately.
   */
  async startAllTasks(
    options?: RequestOptions,
  ): Promise<operations.StartAllTasksResponse> {
    return unwrapAsync(butlerStartAllTasks(
      this,
      options,
    ));
  }

  /**
   * Stop all Butler tasks
   *
   * @remarks
   * This endpoint will stop all currently running tasks and remove any scheduled tasks from the queue.
   */
  async stopAllTasks(
    options?: RequestOptions,
  ): Promise<operations.StopAllTasksResponse> {
    return unwrapAsync(butlerStopAllTasks(
      this,
      options,
    ));
  }

  /**
   * Start a single Butler task
   *
   * @remarks
   * This endpoint will attempt to start a single Butler task that is enabled in the settings. Butler tasks normally run automatically during a time window configured on the server's Settings page but can be manually started using this endpoint. Tasks will run with the following criteria:
   * 1. Any tasks not scheduled to run on the current day will be skipped.
   * 2. If a task is configured to run at a random time during the configured window and we are outside that window, the task will start immediately.
   * 3. If a task is configured to run at a random time during the configured window and we are within that window, the task will be scheduled at a random time within the window.
   * 4. If we are outside the configured window, the task will start immediately.
   */
  async startTask(
    taskName: operations.TaskName,
    options?: RequestOptions,
  ): Promise<operations.StartTaskResponse> {
    return unwrapAsync(butlerStartTask(
      this,
      taskName,
      options,
    ));
  }

  /**
   * Stop a single Butler task
   *
   * @remarks
   * This endpoint will stop a currently running task by name, or remove it from the list of scheduled tasks if it exists. See the section above for a list of task names for this endpoint.
   */
  async stopTask(
    taskName: operations.PathParamTaskName,
    options?: RequestOptions,
  ): Promise<operations.StopTaskResponse> {
    return unwrapAsync(butlerStopTask(
      this,
      taskName,
      options,
    ));
  }
}
