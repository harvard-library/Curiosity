module Spotlight
  ##
  # Exhibit and browse category mastheads
  class Masthead < Spotlight::FeaturedImage
    def display?
      display && iiif_url.present?
    end

    private

    def image_size
      [1350, 360]
    end
  end
end
