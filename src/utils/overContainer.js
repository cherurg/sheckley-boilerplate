export function doesOverContainerExist() {
  return !!window.overContainer;
}

export function getSocket() {
  if (doesOverContainerExist()) {
    return window.overContainer.getGate().getSocket();
  }
}

export function getType() {
  if (doesOverContainerExist()) {
    return window.overContainer.getType();
  }

  return null;
}