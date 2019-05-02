import time

class Timer:
    '''
    A class for timing segments of code
    '''
    def __init__(self):
        self._segments = []
        self._prevTime = None

    def start(self):
        self._segments = [0.0]
        self._prevTime = time.time()

    def lap(self):
        # Calculate current time
        currentTime = time.time()

        # Calculate time difference since previous lap
        diffTime = currentTime - self._prevTime
        self._segments.append(diffTime)

        # Reset previous time to current lap
        self._prevTime = currentTime

    def getSegments(self):
        return self._segments
