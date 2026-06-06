const retrySpacing = 3;

export function mergeDueCardsIntoSessionQueue(
  currentQueue: string[],
  dueCardIds: string[],
): string[] {
  const dueSet = new Set(dueCardIds);
  const keptQueuedCards = currentQueue.filter((cardId) => dueSet.has(cardId));
  const queuedSet = new Set(keptQueuedCards);
  const newDueCards = dueCardIds.filter((cardId) => !queuedSet.has(cardId));

  return [...keptQueuedCards, ...newDueCards];
}

export function advanceSessionQueueAfterReview(
  currentQueue: string[],
  reviewedCardId: string,
  nextDueCardIds: string[],
): string[] {
  const nextDueSet = new Set(nextDueCardIds);
  const remainingQueue = currentQueue.filter(
    (cardId) => cardId !== reviewedCardId && nextDueSet.has(cardId),
  );
  const queuedSet = new Set(remainingQueue);
  const newDueCards = nextDueCardIds.filter(
    (cardId) => cardId !== reviewedCardId && !queuedSet.has(cardId),
  );
  const baseQueue = [...remainingQueue, ...newDueCards];

  if (!nextDueSet.has(reviewedCardId)) {
    return baseQueue;
  }

  if (baseQueue.length === 0) {
    return [reviewedCardId];
  }

  const insertionIndex = Math.min(retrySpacing, baseQueue.length);
  return [
    ...baseQueue.slice(0, insertionIndex),
    reviewedCardId,
    ...baseQueue.slice(insertionIndex),
  ];
}
