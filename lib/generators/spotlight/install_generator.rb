require 'rails/generators'
require 'fileutils'

module Spotlight
  ##
  # spotlight:install generator
  class Install < Rails::Generators::Base
    source_root File.expand_path('../templates', __FILE__)
    class_option :solr_update_class, type: :string, default: 'Spotlight::SolrDocument::AtomicUpdates'
    class_option :mailer_default_url_host, type: :string, default: '' # e.g. localhost:3000

    def inject_spotlight_routes
      route "mount Spotlight::Engine, at: '/'"
      gsub_file 'config/routes.rb', /^\s*root.*/ do |match|
        '#  ' + match.strip + ' # replaced by spotlight root path'
      end
      route "root to: 'spotlight/exhibits#index'"
    end

    def friendly_id
      gem 'friendly_id'
      # we need to immediately run `bundle install` while pointing at github.
      Bundler.with_clean_env { run 'bundle install' }
      generate 'friendly_id'
    end

    def riiif
      gem 'riiif', '~> 2.0'
      route "mount Riiif::Engine => '/images', as: 'riiif'"
      copy_file 'config/initializers/riiif.rb'
    end
    
    def add_delayed_jobs
      gem 'delayed_job_active_record'
      gem 'daemons'
      Bundler.with_clean_env { run 'bundle install' }
      copy_file 'config/initializers/delayed_job.rb'
      empty_directory 'tmp/pids'
      FileUtils.touch('tmp/pids/delayed_job.init')
      generate 'delayed_job:active_record'
      application "config.active_job.queue_adapter = :delayed_job"
    end

    def paper_trail
      generate 'paper_trail:install'
    end

    def sitemaps
      gem 'sitemap_generator'

      Bundler.with_clean_env { run 'bundle install' }

      copy_file 'config/sitemap.rb', 'config/sitemap.rb'

      say <<-EOS.strip_heredoc, :red
       Added a default sitemap_generator configuration in config/sitemap.rb; please
       update the default host to match your environment
      EOS
    end

    def assets
      #create a nothumb directory for the nothumb theme 
      empty_directory 'app/assets/stylesheets/nothumb'
      empty_directory 'app/assets/stylesheets/hldcp'

      #create a fonts directory
      empty_directory 'app/assets/fonts'
      
      #use our modified application.css
      copy_file 'application.css', 'app/assets/stylesheets/application.css' 
      copy_file 'application_nothumb.css', 'app/assets/stylesheets/application_nothumb.css'
      copy_file 'nothumb.scss', 'app/assets/stylesheets/nothumb/nothumb.scss'
      copy_file 'application_hldcp.css', 'app/assets/stylesheets/application_hldcp.css'
      copy_file 'hldcp.scss', 'app/assets/stylesheets/hldcp/hldcp.scss'
      copy_file 'spotlight.scss', 'app/assets/stylesheets/spotlight.scss'
      copy_file 'harvard.css', 'app/assets/stylesheets/harvard.css'
      copy_file 'harvard-main.css', 'app/assets/stylesheets/harvard-main.css'
      copy_file 'spotlight.js', 'app/assets/javascripts/spotlight.js'
      copy_file 'masked_role.css', 'app/assets/stylesheets/masked_role.css'
      copy_file 'fonts.scss', 'app/assets/stylesheets/fonts.scss'

      #copy the trueno fonts
      copy_file 'truenobdit-webfont.ttf', 'app/assets/fonts/truenobdit-webfont.ttf'
      copy_file 'truenobdit-webfont.woff', 'app/assets/fonts/truenobdit-webfont.woff'
      copy_file 'truenobdit-webfont.woff2', 'app/assets/fonts/truenobdit-webfont.woff2'
      copy_file 'truenobd-webfont.ttf', 'app/assets/fonts/truenobd-webfont.ttf'
      copy_file 'truenobd-webfont.woff', 'app/assets/fonts/truenobd-webfont.woff'
      copy_file 'truenobd-webfont.woff2', 'app/assets/fonts/truenobd-webfont.woff2'
      copy_file 'truenoblkit-webfont.ttf', 'app/assets/fonts/truenoblkit-webfont.ttf'
      copy_file 'truenoblkit-webfont.woff', 'app/assets/fonts/truenoblkit-webfont.woff'
      copy_file 'truenoblkit-webfont.woff2', 'app/assets/fonts/truenoblkit-webfont.woff2'
      copy_file 'truenoblk-webfont.woff', 'app/assets/fonts/truenoblk-webfont.woff'
      copy_file 'truenoblk-webfont.woff2', 'app/assets/fonts/truenoblk-webfont.woff2'
      copy_file 'truenoltit-webfont.woff', 'app/assets/fonts/truenoltit-webfont.woff'
      copy_file 'truenoltit-webfont.woff2', 'app/assets/fonts/truenoltit-webfont.woff2'
      copy_file 'truenolt-webfont.ttf', 'app/assets/fonts/truenolt-webfont.ttf'
      copy_file 'truenolt-webfont.woff', 'app/assets/fonts/truenolt-webfont.woff'
      copy_file 'truenolt-webfont.woff2', 'app/assets/fonts/truenolt-webfont.woff2'
      copy_file 'truenorgit-webfont.woff', 'app/assets/fonts/truenorgit-webfont.woff'
      copy_file 'truenorgit-webfont.woff2', 'app/assets/fonts/truenorgit-webfont.woff2'
      copy_file 'truenorg-webfont.woff', 'app/assets/fonts/truenorg-webfont.woff'
      copy_file 'truenorg-webfont.woff2', 'app/assets/fonts/truenorg-webfont.woff2'
      copy_file 'truenosbdit-webfont.woff', 'app/assets/fonts/truenosbdit-webfont.woff'
      copy_file 'truenosbdit-webfont.woff2', 'app/assets/fonts/truenosbdit-webfont.woff2'
      copy_file 'truenosbd-webfont.ttf', 'app/assets/fonts/truenosbd-webfont.ttf'
      copy_file 'truenosbd-webfont.woff', 'app/assets/fonts/truenosbd-webfont.woff'
      copy_file 'truenosbd-webfont.woff2', 'app/assets/fonts/truenosbd-webfont.woff2'
      copy_file 'truenoultltit-webfont.woff', 'app/assets/fonts/truenoultltit-webfont.woff'
      copy_file 'truenoultltit-webfont.woff2', 'app/assets/fonts/truenoultltit-webfont.woff2'
      copy_file 'truenoultlt-webfont.woff', 'app/assets/fonts/truenoultlt-webfont.woff'
      copy_file 'truenoultlt-webfont.woff2', 'app/assets/fonts/truenoultlt-webfont.woff2'

      #copy logo
      copy_file 'hl_header-logo.svg', 'app/assets/images/hl_header-logo.svg'
      #copy cc file
      copy_file 'cc-88x31.png', 'app/assets/images/cc-88x31.png'

    end
    
    def add_theme_images
      empty_directory 'app/assets/images/spotlight/themes'
      copy_file 'default_preview.png', 'app/assets/images/spotlight/themes/default_preview.png' 
      copy_file 'nothumb_preview.png', 'app/assets/images/spotlight/themes/nothumb_preview.png' 
      copy_file 'hldcp_preview.png', 'app/assets/images/spotlight/themes/hldcp_preview.png' 
    end



    def add_roles_to_user
      inject_into_class 'app/models/user.rb', User, '  include Spotlight::User'
    end

    def add_controller_mixin
      inject_into_file 'app/controllers/application_controller.rb', after: 'include Blacklight::Controller' do
        "\n  include Spotlight::Controller\n"
      end
    end

    def add_helper
      copy_file 'spotlight_helper.rb', 'app/helpers/spotlight_helper.rb'
      inject_into_class 'app/helpers/application_helper.rb', ApplicationHelper, '  include SpotlightHelper'
    end

    def add_model_mixin
      if File.exist? 'app/models/solr_document.rb'
        inject_into_file 'app/models/solr_document.rb', after: 'include Blacklight::Solr::Document' do
          "\n  include Spotlight::SolrDocument\n"
        end
      else
        say 'Unable to find SolrDocument class; add `include Spotlight::SolrDocument` to the class manually'
      end
    end

    def add_solr_indexing_mixin
      if File.exist? 'app/models/solr_document.rb'
        inject_into_file 'app/models/solr_document.rb', after: "include Spotlight::SolrDocument\n" do
          "\n  include #{options[:solr_update_class]}\n"
        end
      else
        say "Unable to find SolrDocument class; add `include #{options[:solr_update_class]}` to the class manually"
      end
    end

    def add_search_builder_mixin
      if File.exist? 'app/models/search_builder.rb'
        inject_into_file 'app/models/search_builder.rb', after: "include Blacklight::Solr::SearchBuilderBehavior\n" do
          "\n  include Spotlight::AccessControlsEnforcementSearchBuilder\n"
        end
      else
        say 'Unable to find SearchBuilder class; add `include Spotlight::AccessControlsEnforcementSearchBuilder` to the class manually.'
      end
    end

    def add_example_catalog_controller
      copy_file 'catalog_controller.rb', 'app/controllers/catalog_controller.rb'
    end

    def add_osd_viewer
      gem 'blacklight-gallery', '>= 0.3.0'
      generate 'blacklight_gallery:install'
    end

    def add_oembed
      gem 'blacklight-oembed', '>= 0.1.0'
      generate 'blacklight_oembed:install'
    end
    
    def update_catalog_controller
      gsub_file('app/controllers/catalog_controller.rb', /:openseadragon/, ':viewer')
    end
    
    def update_assets_initializer
      append_to_file('config/initializers/assets.rb', 'Rails.application.config.assets.precompile += %w( application_nothumb.css application_hldcp.css )')
    end

    def add_mailer_defaults
      if options[:mailer_default_url_host].present?
        say 'Injecting a placeholder config.action_mailer.default_url_options; be sure to update it for your environment', :yellow
        insert_into_file 'config/application.rb', after: "< Rails::Application\n" do
          <<-EOF
          config.action_mailer.default_url_options = { host: "#{options[:mailer_default_url_host]}", from: "noreply@example.com" }
          EOF
        end
      else
        say 'Please add a default configuration config.action_mailer.default_url_options for your environment', :red
      end
    end

    def generate_config
      directory 'config'
    end

    def add_solr_config_resources
      copy_file '.solr_wrapper.yml', '.solr_wrapper.yml'
      directory 'solr'
      copy_file 'solr/config/schema.xml'
      copy_file 'solr/config/solrconfig.xml'
    end

    def generate_devise_invitable
      gem 'devise_invitable'
      generate 'devise_invitable:install'
      generate 'devise_invitable', 'User'
    end

    def add_translations
      copy_file 'config/initializers/translation.rb'
    end
    

    def generate_paper_trail_column_size_migration
      generate 'spotlight:increase_paper_trail_column_size'
    end
    
    def harvester
      gem 'spotlight-oaipmh-resources', github: 'harvard-library/spotlight-oaipmh-resources', branch: 'job_entry'
      Bundler.with_clean_env { run 'bundle install' }
      route "mount Spotlight::Oaipmh::Resources::Engine, at: 'spotlight_oaipmh_resources'"
    end
    
    #Inserts a file to join multiple values by a <br> instead of a comma
    def add_join
      copy_file 'join.rb', 'app/presenters/blacklight/rendering/join.rb'
    end
 
  end
end
