Original: https://docs.google.com/document/d/1TmivvSbD4my2QQ2sMEg-1uujxLYSarYp2Q1BB41GNWc/edit?usp=sharing


brocoli's Software Architecture for Awesome Game Applications
Introduction
This document's goal is to specify a software architecture -- mostly code architecture -- for game applications.

This is heavily inspired by MVC architectures and pub/sub systems, but changes some names in order to avoid confusion, especially since there are multiple MVC interpretations around.
Main goals
Allow for very easy modification and maintenance of the application, even when drastic changes are necessary.

For instance, even if we want to change a game to work over a network with an authoritative server instead of locally, or if you want to turn a 2-player game into a many-player game, it should be easy.

Prevent spaghetti and fragile code.

That is, guidelines for how to build kinds of features or mechanisms should be as obvious as possible. This helps both during code creation and code review.

Provide ease of debugging and developing.

Which means that the code's style should be easy to integrate external tools that aid in developing and debugging, and the creation of test suites.

Clear and comprehensive code communication.

Code should be clean, preferring to use good names whenever possible to communicate the software's mechanical work. Programmer intent should be detailed in comments, and APIs should be extensively documented via docstrings. Yes, this includes callback functions passed as arguments.

Applying different programming paradigms to the problem domains they are best optimized for.

For instance, object-oriented paradigms are great for defining the control flow of an application. Data-oriented approaches are essential for high-performance in the state / data level. Aspect-oriented programming helps a lot with uncoupling output elements, entity-component systems are great for problems where tight coupling is required between systems that are wildly domain-separated, and state machines are great for organizing the highest-level view into the application's behaviour. Game applications have examples of all of these, and the architecture should aim to apply -- or at least should not get in the way of applying -- each in its respective problem domain.

Aim for frictionless development.

The architecture should avoid introducing useless bureaucracy. Prefer the simple approach if it does not cause visible problems.

Pillars
Heavy application of the Single Responsibility Principle (SRP) on all abstraction levels.
In particular, explicit separation of graphical elements, business rules, state, inputs and control flows.
Designing for asynchrony, because it adds incredible robustness and versatility to the application's code.
Designing for source-agnostic input, for the same reason as above.
Mindful decision on whether each control flow is event-like and passively reacted and uncoupled, or is control-like and actively instigated / coupled.
Use of the "changes together" rule for determining the optimal extent of coupling..
Macro vision of the game application as a state-machine controlled by a maestro.
Explicit control of initialization.
Permission to use globally-accessible components, as long as their activation and deactivation is tightly controlled by the state-machine.
Understanding of control flows as input transformations that eventually causes transformative actions on data models, and then get broadcast and reacted to.
Modelling of business rules as pure functions.
Resource acquisition coded as asynchronous operations that are assumed to be fail-prone.

Framework
Minimal Supported Environment
The following are required pre-existing features before implementing this architecture.

The Game Engine / Application Runtime should provide an entry point that will sets up the Maestro component.
Preferably it should provide a
The programming language or code framework must provide type-agnostic array and dictionary data containers. It is assumed that the components that depend on the values in these data containers know how to read and interpret them.
A globally-accessible pub/sub message broadcast bus (henceforth just called "the bus") must be provided, and preferably it should support tiered message signals.
i.e., a "game/humanInput/cButton" tiered signal should trigger registered subscribers of "game/humanInput/cButton", "game/humanInput", and "game" inputs. Since multiple signals can trigger the same handler, the triggering signal should be passed to it, as well as any extra arguments passed in the signal invocation.
A strong Promise implementation and async/await-like or coroutine syntax is required for easy handling of asynchronous operations.
All components require lifetime management capabilities. I.e. constructors and destructors.
Program Component Types
Model
State components are usually globally accessible data objects that are transformed by control components via rules. When they are transformed they notify their new state, and optionally the state delta. All application state should be held in these components, even if other components may hold a copy of it as a part of their internal working logic.
Rules are pure functions that receive state as arguments and return the new values for assignment.
Interface
View components react directly to changes in the relevant state. They embody its representation to the external world, be it a screen or a REST API.
Graphic elements are the bread-and-butter components of views.
Input components are usually sub-components of a view's graphic elements. They share their activation state with their parent component, and their code always only broadcasts a signal in the bus with potential arguments.
Control
Interpreters react to messages generated by state or by input, turning them into actions. These actions can be the generation of new inputs, or manipulations of state via rules.
The Maestro similarly reacts to messages generated by state or by input, but instead of turning them into actions, it transitions the application state machine's state.
The application state machine holds the activation and deactivation logic of all other components.
Coding guidelines
Don't omit broadcast messages. These should be made at least whenever:
A state component is modified.
An input is triggered.
A component is activated / deactivated.
State component update broadcasts should be eventually idempotent.
Never broadcast an action. This means that if the message signal is a verb, you should rework your control flow.
Use message tiers extensively as namespaces.
Never assume the order in which listeners of the bus will perform actions.
Acquire external resources via asynchronous actions that modify state components, which will trigger a broadcast message. Note that this implies that resources are a part of state, and that views must be able to function without them.
The application state machine should be the only component that instantiates, destroys, activates or deactivates other components. It shouldn't do anything else either.
Similarly, the Maestro should be the only component to operate the application state machine, and it should do nothing else.
Code your ingame state transitions as if an authoritative server is handling the game logic. Make heavy use of derivative inputs.
i.e., convert "playerTouchedGridAtPositionXY" into a derivative input "playerPlayedAtIJ" before using it.

